using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace backend.Types
{
    public abstract class BaseType
    {
        [Key]
        [NotNull]
        [Column("id")]
        public int Id { get; set; }
    }
}
