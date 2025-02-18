using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace backend.Types
{
    public class Category : BaseType
    {
        [NotNull]
        [Column("title")]
        public string Title { get; set; }
    }
}
