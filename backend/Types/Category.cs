using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace backend.Types
{
    public class Category : BaseType
    {
        [Key]
        [NotNull]
        [Column("id")]
        public int Id { get; set; }

        [NotNull]
        [Column("title")]
        public string Title { get; set; }
    }
}
